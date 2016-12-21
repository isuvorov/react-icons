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

var FaParagraph = function (_React$Component) {
    _inherits(FaParagraph, _React$Component);

    function FaParagraph() {
        _classCallCheck(this, FaParagraph);

        return _possibleConstructorReturn(this, (FaParagraph.__proto__ || Object.getPrototypeOf(FaParagraph)).apply(this, arguments));
    }

    _createClass(FaParagraph, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34 4.2v1.6q0 0.7-0.4 1.4t-0.9 0.7q-1.2 0-1.2 0-0.6 0.2-0.8 0.7 0 0.3 0 1.5v25.7q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-27.2h-3.1v27.2q0 0.5-0.4 0.9t-1 0.4h-2.4q-0.6 0-1-0.4t-0.4-0.9v-11.1q-3.3-0.3-5.5-1.3-2.8-1.3-4.2-4-1.5-2.6-1.5-5.8 0-3.7 2-6.4 2-2.6 4.7-3.5 2.4-0.8 9.3-0.8h10.7q0.5 0 0.9 0.4t0.4 0.9z' })
                )
            );
        }
    }]);

    return FaParagraph;
}(React.Component);

exports.default = FaParagraph;
module.exports = exports['default'];