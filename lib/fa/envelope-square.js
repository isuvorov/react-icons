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

var FaEnvelopeSquare = function (_React$Component) {
    _inherits(FaEnvelopeSquare, _React$Component);

    function FaEnvelopeSquare() {
        _classCallCheck(this, FaEnvelopeSquare);

        return _possibleConstructorReturn(this, (FaEnvelopeSquare.__proto__ || Object.getPrototypeOf(FaEnvelopeSquare)).apply(this, arguments));
    }

    _createClass(FaEnvelopeSquare, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.9 2.9q2.6 0 4.5 1.8t1.9 4.6v21.4q0 2.7-1.9 4.6t-4.5 1.8h-21.5q-2.6 0-4.5-1.8t-1.9-4.6v-21.4q0-2.7 1.9-4.6t4.5-1.8h21.5z m0.7 23.5v-9.7q-0.7 0.8-1.5 1.2-0.7 0.5-2.9 1.9t-3.4 2.2q-2.2 1.6-3.7 1.6-1.4 0-3.6-1.6-1-0.7-3.2-2t-3.2-2.1q-0.2-0.2-0.7-0.6t-0.7-0.6v9.7q0 0.9 0.6 1.5t1.6 0.7h18.5q0.9 0 1.5-0.7t0.7-1.5z m0-12.8q0-0.9-0.6-1.5t-1.6-0.7h-18.5q-0.9 0-1.6 0.7t-0.6 1.5q0 0.8 0.7 1.7t1.5 1.4q1.1 0.7 3.1 2t2.9 1.9l0.3 0.2 0.5 0.3 0.5 0.3 0.5 0.3 0.5 0.2 0.5 0.2 0.4 0 0.5 0 0.5-0.2 0.5-0.2 0.5-0.3 0.5-0.3 0.4-0.3 0.4-0.2 6-3.9q0.8-0.5 1.5-1.4t0.7-1.7z' })
                )
            );
        }
    }]);

    return FaEnvelopeSquare;
}(React.Component);

exports.default = FaEnvelopeSquare;
module.exports = exports['default'];