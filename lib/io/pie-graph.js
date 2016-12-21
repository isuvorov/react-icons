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

var IoPieGraph = function (_React$Component) {
    _inherits(IoPieGraph, _React$Component);

    function IoPieGraph() {
        _classCallCheck(this, IoPieGraph);

        return _possibleConstructorReturn(this, (IoPieGraph.__proto__ || Object.getPrototypeOf(IoPieGraph)).apply(this, arguments));
    }

    _createClass(IoPieGraph, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm0.1 20c0-0.4-0.1-0.9-0.1-1.2 0-9 7.3-16.3 16.3-16.3 0.3 0 0.8 0.1 1.2 0.1v17.4h-17.4z m6 11.4c-2-2.5-3.3-5.5-3.5-8.9h17.4v-17.4c3.4 0.2 6.4 1.5 8.9 3.5 3.7 3 6.1 7.5 6.1 12.7 0 8.9-7.3 16.2-16.2 16.2-5.2 0-9.7-2.4-12.7-6.1z' })
                )
            );
        }
    }]);

    return IoPieGraph;
}(React.Component);

exports.default = IoPieGraph;
module.exports = exports['default'];