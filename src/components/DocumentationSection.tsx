import React from 'react';
import { CodeSample } from './CodeSample';

export const DocumentationSection = ({ contentItems }: { contentItems: Array<{
  title: string;
  documentation?: {
    description?: string;
    props?: Array<{
      name: string;
      type: string;
      description: string;
      required?: boolean;
    }>;
    examples?: Array<{
      title: string;
      description?: string;
      code: string;
    }>;
  };
}> }) => {
    return (
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">Documentation</h2>
        <div className="space-y-8">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="mb-4">{item.documentation?.description}</p>
              
              {item.documentation?.props && (
                <>
                  <h4 className="text-lg font-semibold mb-2">Props</h4>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="font-medium">Name</div>
                    <div className="font-medium">Type</div>
                    <div className="font-medium">Description</div>
                    {item.documentation.props.map((prop, idx) => (
                      <React.Fragment key={idx}>
                        <div className="font-mono text-sm">
                          {prop.name}
                          {prop.required && <span className="text-red-500">*</span>}
                        </div>
                        <div className="font-mono text-sm">{prop.type}</div>
                        <div>{prop.description}</div>
                      </React.Fragment>
                    ))}
                  </div>
                </>
              )}
  
              {item.documentation?.examples?.map((example, idx) => (
                <div key={idx} className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">{example.title}</h4>
                  {example.description && (
                    <p className="mb-2">{example.description}</p>
                  )}
                  <CodeSample code={example.code} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };