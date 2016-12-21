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

var FaLeaf = function (_React$Component) {
    _inherits(FaLeaf, _React$Component);

    function FaLeaf() {
        _classCallCheck(this, FaLeaf);

        return _possibleConstructorReturn(this, (FaLeaf.__proto__ || Object.getPrototypeOf(FaLeaf)).apply(this, arguments));
    }

    _createClass(FaLeaf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.6 15.7q0-0.6-0.5-1t-1-0.4q-3.8 0-7.1 1.1t-5.7 3-5.3 4.9q-0.4 0.5-0.4 1 0 0.6 0.4 1t1 0.4q0.5 0 1-0.4 0.6-0.5 1.7-1.6t1.5-1.5q3-2.7 5.9-3.9t7-1.2q0.6 0 1-0.4t0.5-1z m11.4-4.4q0 2.1-0.4 4.3-1.1 5-4.2 8.6t-7.9 5.9q-4.8 2.4-9.8 2.4-3.3 0-6.4-1-0.3-0.1-2-0.9t-2.1-0.9q-0.4 0-0.9 0.7t-1 1.6-1.2 1.6-1.3 0.7q-0.7 0-1.1-0.3t-0.7-0.5-0.6-0.9q-0.1-0.1-0.2-0.3t-0.1-0.2-0.1-0.2 0-0.3q0-0.8 0.7-1.7t1.5-1.4 1.5-1.3 0.7-1q0-0.1-0.3-0.9t-0.3-1q-0.2-1.1-0.2-2.3 0-2.6 0.9-4.9t2.7-4.1 3.8-3.1 4.5-2.2q1.3-0.4 3.3-0.5t4-0.2 4-0.2 3.6-0.5 2.5-1.3l0.7-0.6 0.7-0.6 0.6-0.5 0.8-0.3 1-0.1q0.8 0 1.5 1t1.1 2.5 0.5 2.8 0.2 2.1z' })
                )
            );
        }
    }]);

    return FaLeaf;
}(React.Component);

exports.default = FaLeaf;
module.exports = exports['default'];