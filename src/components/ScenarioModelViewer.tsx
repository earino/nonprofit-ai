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

export default function ScenarioModelViewer({ data }: Props) {
  const [selectedScenarioId, setSelectedScenarioId] = useState(data.scenarios[0]?.id);
  const [selectedModel, setSelectedModel] = useState('gpt5');

  if (!data || !data.scenarios || !data.outputs) {
    return <div className="text-red-600">No output data available</div>;
  }

  // Get unique models
  const models = Array.from(new Set(data.outputs.map(o => o.model)));

  // Get outputs for selected scenario and model
  const currentOutput = data.outputs.find(
    o => o.scenario_id === selectedScenarioId && o.model === selectedModel
  );

  const currentScenario = data.scenarios.find(s => s.id === selectedScenarioId);

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
      {/* Scenario Selector */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Select Scenario:
        </label>
        <select
          value={selectedScenarioId}
          onChange={(e) => setSelectedScenarioId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {data.scenarios.map((scenario) => (
            <option key={scenario.id} value={scenario.id}>
              {scenario.name}
            </option>
          ))}
        </select>

        {currentScenario && (
          <p className="mt-2 text-sm text-gray-600 italic">
            {currentScenario.description}
          </p>
        )}

        {/* Show scenario values */}
        {currentScenario && (
          <details className="mt-3 text-sm">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-700 font-medium">
              View scenario details
            </summary>
            <div className="mt-2 bg-gray-50 rounded-lg p-3 space-y-1">
              {Object.entries(currentScenario.values).map(([key, value]) => (
                <div key={key} className="flex gap-2">
                  <span className="font-mono text-xs text-gray-500">[{key}]:</span>
                  <span className="text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>

      {/* Model Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex gap-2 flex-wrap">
          {models.map((modelKey) => {
            const modelOutput = data.outputs.find(
              o => o.scenario_id === selectedScenarioId && o.model === modelKey
            );
            const isActive = modelKey === selectedModel;

            return (
              <button
                key={modelKey}
                onClick={() => setSelectedModel(modelKey)}
                className={`px-4 py-2 font-semibold border-b-2 transition-colors ${
                  isActive
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
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

      {/* Output Display */}
      {currentOutput ? (
        <div>
          {/* Output Content */}
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

                <div className="pt-2 border-t border-blue-200">
                  <span className="text-xs text-gray-500">
                    Evaluated by {currentOutput.evaluation.evaluator_model}
                  </span>
                </div>
              </div>
            </details>
          )}
        </div>
      ) : (
        <div className="text-gray-500 italic">No output available for this combination</div>
      )}

      {/* Overall Summary */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          Generated {formatDate(data.generated_at)} • {data.scenarios.length} scenarios • {data.outputs.length} outputs •
          Average score: <span className="font-semibold text-green-700">{data.summary.average_score}/10</span> •
          Total cost: ${data.summary.total_cost_usd.toFixed(4)}
        </p>
      </div>
    </div>
  );
}
