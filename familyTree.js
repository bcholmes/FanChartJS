
var wrap = function(node, data) {
	
	return {
		addParent: function(parent) {
			var result = createNode(parent);
			result.child = node;
			node.parents.push(result);
			return wrap(result, data);
		},
		level: function() {
			if (node.child == null) {
				return 0;
			} else {
				return wrap(node.child, data).level() + 1;
			}
		},
		parent: function(i) {
			if (node.parents.length > i && i >= 0) {
				return wrap(node.parents[i], data);
			} else {
				return null;
			}
		},
		displayName: function() {
			if (node.name) {
				return node.name;
			} else {
				return "Unnamed Person";
			}
		}
	};
}

var createNode = function(original) {
	var element = { 'parents': [] };
	if (original.name) {
		element.name = original.name;
	}
	if (original.gender) {
		element.gender = original.gender;
	}
	return element;
}

exports.familyTree = function(root) {
	var element = createNode(root);
	var data = {
		"root": element
	};

	return wrap(element, data);
}

