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

var FaContao = function (_React$Component) {
    _inherits(FaContao, _React$Component);

    function FaContao() {
        _classCallCheck(this, FaContao);

        return _possibleConstructorReturn(this, (FaContao.__proto__ || Object.getPrototypeOf(FaContao)).apply(this, arguments));
    }

    _createClass(FaContao, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.1 2.9h4.4q-1.6 1.4-2.8 3.3-0.8 1.2-1.4 2.6t-0.6 2.8-0.2 2.6 0.2 3 0.5 2.8 0.6 3l0.1 0.7q1.2 5.3 1.9 7.3 1.2 3.8 3.3 6.1h-6q-1.1 0-1.8-0.7t-0.8-1.8v-29.2q0-1 0.8-1.8t1.8-0.7z m26.9 0h6.9q1.1 0 1.9 0.7t0.7 1.8v29.2q0 1-0.7 1.8t-1.9 0.7h-4q4.8-4.6 4.4-12.6l-10.4 2.3q-0.1 1-0.3 1.8t-0.7 1.6-1.3 1.4-2.1 0.8q-2.8 0.5-4.5-0.9-0.7-0.6-1.1-1.4t-1.2-2.9-1.4-5.7q-0.8-3.7-1.1-5.9t-0.1-3.1 0.5-1.7q0.5-0.9 1.4-1.6t2.3-1.1q1-0.2 1.9-0.1t1.5 0.4 1.2 0.8 0.9 1 0.8 1.3l10.5-2.2q-1.6-3.9-4.1-6.4z' })
                )
            );
        }
    }]);

    return FaContao;
}(React.Component);

exports.default = FaContao;
module.exports = exports['default'];