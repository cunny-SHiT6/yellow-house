import { Rule } from "eslint";

const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: "uwu",
    },
  },
  create(context: Rule.RuleContext) {
    return {
      VariableDeclaration(node) {
        node.declarations.forEach((declaration) => {
          if (
            declaration.id.type === "Identifier" &&
            /[0-9]/g.test(declaration.id.name)
          ) {
            context.report({
              node,
              message: "อย่าใช้เลขอารบิก จงใช้เลขไทย",
            });
          }
        });
      },
      FunctionDeclaration(node) {
        if (node?.id?.type === "Identifier" && /[0-9]/g.test(node.id.name)) {
          context.report({
            node,
            message: "อย่าใช้เลขอารบิก จงใช้เลขไทย",
          });
        }
      },
    };
  },
};

export default rule;
