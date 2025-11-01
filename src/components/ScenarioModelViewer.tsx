import { useState } from 'react';

interface Scenario {
  id: string;
  name: string;
  description: string;
  values: Record<string, string>;
}

interface Output {
  scenario_id: string;
  model: string;
  model_display_name: string;
  content: string;
  timestamp: string;
  tokens?: {
    total: number;
  };
  cost_usd?: number;
  evaluation?: {
    overall_score: number;
    reasoning: string;
    strengths: string[];
    weaknesses: string[];
  };
}

interface OutputsData {
  scenarios: Scenario[];
  outputs: Output[];
  generated_at: string;
  summary: {
    average_score: number;
    total_cost_usd: number;
  };
}

interface Props {
  data: OutputsData;
}

// Component for a single scenario with model tabs
function ScenarioSection({ scenario, outputs, selectedModel, setSelectedModel }: {
  scenario: Scenario;
  outputs: Output[];
  selectedModel: string;
  setSelectedModel: (model: string) => void;
}) {
  const scenarioOutputs = outputs.filter(o => o.scenario_id === scenario.id);
  const models = Array.from(new Set(scenarioOutputs.map(o => o.model)));
  const currentOutput = scenarioOutputs.find(o => o.model === selectedModel);

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="mb-12 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Scenario Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">{scenario.name}</h3>
        <p className="text-sm text-gray-600 mt-1 italic">{scenario.description}</p>

        {/* Scenario Details */}
        <details className="mt-3">
          <summary className="cursor-pointer text-sm text-blue-600 hover:text-blue-700 font-medium">
            View scenario details
          </summary>
          <div className="mt-2 bg-white/80 rounded-lg p-3 space-y-1">
            {Object.entries(scenario.values).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <span className="font-mono text-xs text-gray-500">[{key}]:</span>
                <span className="text-sm text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </details>
      </div>

      {/* Model Tabs */}
      <div className="border-b border-gray-200 bg-gray-50 px-6">
        <div className="flex gap-2 flex-wrap -mb-px">
          {models.map((modelKey) => {
            const modelOutput = scenarioOutputs.find(o => o.model === modelKey);
            const isActive = modelKey === selectedModel;

            return (
              <button
                key={modelKey}
                onClick={() => setSelectedModel(modelKey)}
                className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-600 text-blue-600 bg-white'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-white/50'
                }`}
              >
                {modelOutput?.model_display_name || modelKey}
                {modelOutput?.evaluation && (
                  <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                    {modelOutput.evaluation.overall_score}/10
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Output Content */}
      <div className="p-6">
        {currentOutput ? (
          <div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-emerald-500 rounded-r-xl px-6 py-5 shadow-sm">
              <div className="prose prose-gray max-w-none">
                {currentOutput.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4 last:mb-0" style={{ fontFamily: 'Georgia, serif' }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Metadata */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <span>Generated: {formatDate(currentOutput.timestamp)}</span>
              {currentOutput.tokens && (
                <span>{currentOutput.tokens.total} tokens</span>
              )}
              {currentOutput.cost_usd && (
                <span>${currentOutput.cost_usd.toFixed(4)} cost</span>
              )}
            </div>

            {/* Evaluation Details */}
            {currentOutput.evaluation && (
              <details className="mt-4">
                <summary className="cursor-pointer text-sm font-semibold text-gray-700 hover:text-gray-900">
                  AI Evaluation Details (Score: {currentOutput.evaluation.overall_score}/10)
                </summary>
                <div className="mt-3 bg-blue-50 rounded-lg p-4 space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Reasoning:</span>
                    <p className="text-gray-600 mt-1">{currentOutput.evaluation.reasoning}</p>
                  </div>

                  {currentOutput.evaluation.strengths && currentOutput.evaluation.strengths.length > 0 && (
                    <div>
                      <span className="font-semibold text-green-700">Strengths:</span>
                      <ul className="mt-1 space-y-1 text-gray-600">
                        {currentOutput.evaluation.strengths.map((strength, idx) => (
                          <li key={idx}>• {strength}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {currentOutput.evaluation.weaknesses && currentOutput.evaluation.weaknesses.length > 0 && (
                    <div>
                      <span className="font-semibold text-orange-700">Weaknesses:</span>
                      <ul className="mt-1 space-y-1 text-gray-600">
                        {currentOutput.evaluation.weaknesses.map((weakness, idx) => (
                          <li key={idx}>• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        ) : (
          <div className="text-gray-500 italic">No output available for this model</div>
        )}
      </div>
    </div>
  );
}

export default function ScenarioModelViewer({ data }: Props) {
  // Single model selection state - synced across all scenarios for easy comparison
  const [selectedModel, setSelectedModel] = useState('gpt5');

  if (!data || !data.scenarios || !data.outputs) {
    return <div className="text-red-600">No output data available</div>;
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="my-8">
      {/* Info Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
        <p className="text-sm text-gray-700">
          <strong>Compare scenarios:</strong> We tested this prompt with 3 different nonprofit contexts.
          Each scenario shows outputs from GPT-5, Claude, and Gemini. Select a model above each scenario to compare.
        </p>
      </div>

      {/* Render all scenarios */}
      {data.scenarios.map((scenario) => (
        <ScenarioSection
          key={scenario.id}
          scenario={scenario}
          outputs={data.outputs}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />
      ))}

      {/* Overall Summary */}
      <div className="mt-8 pt-6 border-t border-gray-200 bg-gray-50 rounded-lg p-4">
        <p className="text-sm text-gray-600">
          <strong>Test Summary:</strong> Generated {formatDate(data.generated_at)} • {data.scenarios.length} scenarios • {data.outputs.length} total outputs •
          Average quality score: <span className="font-semibold text-green-700">{data.summary.average_score}/10</span> •
          Total validation cost: ${data.summary.total_cost_usd.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
