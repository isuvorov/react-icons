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

var FaGamepad = function (_React$Component) {
    _inherits(FaGamepad, _React$Component);

    function FaGamepad() {
        _classCallCheck(this, FaGamepad);

        return _possibleConstructorReturn(this, (FaGamepad.__proto__ || Object.getPrototypeOf(FaGamepad)).apply(this, arguments));
    }

    _createClass(FaGamepad, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.3 24v-2.7q0-0.3-0.2-0.4t-0.5-0.2h-4v-4q0-0.3-0.2-0.5t-0.4-0.2h-2.7q-0.3 0-0.5 0.2t-0.2 0.5v4h-3.9q-0.3 0-0.5 0.1t-0.2 0.5v2.7q0 0.3 0.2 0.5t0.5 0.2h3.9v3.9q0 0.3 0.2 0.5t0.5 0.2h2.7q0.3 0 0.4-0.2t0.2-0.5v-3.9h4q0.3 0 0.5-0.2t0.2-0.5z m11.9 1.3q0-1.1-0.7-1.9t-1.9-0.7-1.9 0.7-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.7-1.9z m5.4-5.3q0-1.1-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m5.3 2.7q0 4.4-3.1 7.5t-7.6 3.1q-4 0-7-2.7h-4.6q-3 2.7-7 2.7-4.4 0-7.5-3.1t-3.1-7.5 3.1-7.6 7.5-3.1h18.6q4.4 0 7.6 3.1t3.1 7.6z' })
                )
            );
        }
    }]);

    return FaGamepad;
}(React.Component);

exports.default = FaGamepad;
module.exports = exports['default'];