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

var FaIoxhost = function (_React$Component) {
    _inherits(FaIoxhost, _React$Component);

    function FaIoxhost() {
        _classCallCheck(this, FaIoxhost);

        return _possibleConstructorReturn(this, (FaIoxhost.__proto__ || Object.getPrototypeOf(FaIoxhost)).apply(this, arguments));
    }

    _createClass(FaIoxhost, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 18.8q0 0.6-0.5 1.1t-1.2 0.5h-13.6q-0.7 0-1.2-0.5t-0.5-1.1 0.5-1.2 1.2-0.5h13.6q0.7 0 1.2 0.5t0.5 1.2z m4.2 0q0-1.7-0.5-3.3h-19.1q-0.7 0-1.1-0.5t-0.5-1.2q0-0.7 0.5-1.2t1.1-0.5h17.7q-1.7-2.7-4.6-4.4t-6.2-1.6q-3.4 0-6.4 1.7t-4.6 4.6-1.7 6.4q0 1.6 0.5 3.3h19q0.7 0 1.2 0.4t0.5 1.2q0 0.7-0.5 1.2t-1.2 0.5h-17.6q1.7 2.8 4.6 4.4t6.2 1.6q2.6 0 4.9-1t4-2.7 2.7-4 1-4.9z m7.2-5q0 0.7-0.5 1.2t-1.2 0.5h-2.6q0.4 1.6 0.4 3.3 0 3.2-1.3 6.2t-3.4 5.1-5.1 3.4-6.2 1.3q-4.8 0-8.7-2.6t-5.9-6.8h-3.6q-0.7 0-1.2-0.5t-0.5-1.2q0-0.7 0.5-1.2t1.2-0.4h2.5q-0.3-1.7-0.3-3.3 0-3.3 1.3-6.2t3.4-5.1 5.1-3.5 6.2-1.2q4.7 0 8.7 2.5t5.8 6.8h3.7q0.7 0 1.2 0.5t0.4 1.2z' })
                )
            );
        }
    }]);

    return FaIoxhost;
}(React.Component);

exports.default = FaIoxhost;
module.exports = exports['default'];