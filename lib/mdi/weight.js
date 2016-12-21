'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var MdiWeight = function (_React$Component) {
    _inherits(MdiWeight, _React$Component);

    function MdiWeight() {
        _classCallCheck(this, MdiWeight);

        return _possibleConstructorReturn(this, (MdiWeight.__proto__ || Object.getPrototypeOf(MdiWeight)).apply(this, arguments));
    }

    _createClass(MdiWeight, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 24.00 24.00' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { 'stroke-width': '0.2', 'stroke-linejoin': 'round', d: 'M 12,3C 14.2091,3 16,4.79086 16,6.99999C 16,7.72857 15.8052,8.41165 15.4649,9L 18,9C 18.9523,9 19.7491,9.66555 19.9507,10.5569C 21.9645,18.5682 22,18.78 22,19C 22,20.1046 21.1046,21 20,21L 4,21C 2.89543,21 2,20.1046 2,19C 2,18.78 2.03554,18.5682 4.04926,10.5569C 4.25088,9.66555 5.04771,9 6,9L 8.53513,9C 8.19479,8.41165 8,7.72857 8,6.99999C 8,4.79086 9.79086,3 12,3 Z M 12,5C 10.8954,5 10,5.89544 10,7.00001C 10,8.10458 10.8954,9 12,9C 13.1046,9 14,8.10458 14,7.00001C 14,5.89544 13.1046,5 12,5 Z ' })
                )
            );
        }
    }]);

    return MdiWeight;
}(React.Component);

exports.default = MdiWeight;
module.exports = exports['default'];