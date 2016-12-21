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

var GoGraph = function (_React$Component) {
    _inherits(GoGraph, _React$Component);

    function GoGraph() {
        _classCallCheck(this, GoGraph);

        return _possibleConstructorReturn(this, (GoGraph.__proto__ || Object.getPrototypeOf(GoGraph)).apply(this, arguments));
    }

    _createClass(GoGraph, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm27.5 10h-7.5v25h7.5v-25z m10 7.5h-7.5v17.5h7.5v-17.5z m-35 20v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-2.5v-5h2.5v-2.5h-5v40h40v-2.5h-37.5z m15-15h-7.5v12.5h7.5v-12.5z' })
                )
            );
        }
    }]);

    return GoGraph;
}(React.Component);

exports.default = GoGraph;
module.exports = exports['default'];