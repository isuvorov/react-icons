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

var FaIndent = function (_React$Component) {
    _inherits(FaIndent, _React$Component);

    function FaIndent() {
        _classCallCheck(this, FaIndent);

        return _possibleConstructorReturn(this, (FaIndent.__proto__ || Object.getPrototypeOf(FaIndent)).apply(this, arguments));
    }

    _createClass(FaIndent, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm7.9 18.6q0 0.3-0.2 0.5l-6.5 6.4q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2t-0.2-0.5v-12.9q0-0.2 0.2-0.5t0.5-0.2q0.3 0 0.5 0.2l6.5 6.5q0.2 0.2 0.2 0.5z m32.1 10.7v4.3q0 0.3-0.2 0.5t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h38.6q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-24.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h24.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.6v4.3q0 0.3-0.2 0.5t-0.5 0.2h-24.3q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.2 0.2-0.5t0.5-0.2h24.3q0.3 0 0.5 0.2t0.2 0.5z m0-8.5v4.3q0 0.2-0.2 0.5t-0.5 0.2h-38.6q-0.3 0-0.5-0.2t-0.2-0.5v-4.3q0-0.3 0.2-0.5t0.5-0.2h38.6q0.3 0 0.5 0.2t0.2 0.5z' })
                )
            );
        }
    }]);

    return FaIndent;
}(React.Component);

exports.default = FaIndent;
module.exports = exports['default'];