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

var FaBullhorn = function (_React$Component) {
    _inherits(FaBullhorn, _React$Component);

    function FaBullhorn() {
        _classCallCheck(this, FaBullhorn);

        return _possibleConstructorReturn(this, (FaBullhorn.__proto__ || Object.getPrototypeOf(FaBullhorn)).apply(this, arguments));
    }

    _createClass(FaBullhorn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.1 14.3q1.2 0 2.1 0.8t0.8 2-0.8 2.1-2.1 0.8v8.6q0 1.1-0.8 2t-2 0.8q-9.3-7.7-18.1-8.5-1.3 0.5-2.1 1.5t-0.7 2.3 0.9 2q-0.4 0.8-0.5 1.5t0.2 1.3 0.7 1.2 1.1 1.1 1.3 1.2q-0.6 1.2-2.4 1.8t-3.8 0.3-2.9-1.3q-0.2-0.5-0.7-1.9t-0.7-2.1-0.5-2-0.4-2.3 0.1-2.2 0.5-2.4h-2.7q-1.5 0-2.5-1.1t-1.1-2.5v-4.3q0-1.5 1.1-2.5t2.5-1.1h10.7q9.7 0 20-8.5 1.1 0 2 0.8t0.8 2v8.6z m-2.8 13.5v-21.3q-8.8 6.7-17.2 7.6v6.1q8.5 0.9 17.2 7.6z' })
                )
            );
        }
    }]);

    return FaBullhorn;
}(React.Component);

exports.default = FaBullhorn;
module.exports = exports['default'];