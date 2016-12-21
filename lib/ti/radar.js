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

var TiRadar = function (_React$Component) {
    _inherits(TiRadar, _React$Component);

    function TiRadar() {
        _classCallCheck(this, TiRadar);

        return _possibleConstructorReturn(this, (TiRadar.__proto__ || Object.getPrototypeOf(TiRadar)).apply(this, arguments));
    }

    _createClass(TiRadar, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.3c6.4 0 11.7-5.2 11.7-11.6s-5.3-11.7-11.7-11.7c-6.4 0-11.7 5.2-11.7 11.7s5.3 11.6 11.7 11.6z m-1.7-19.8v3.2c0 0.9 0.8 1.6 1.7 1.6s1.7-0.7 1.7-1.6v-3.2c3.2 0.7 5.8 3.2 6.5 6.5h-3.2c-0.9 0-1.7 0.7-1.7 1.7s0.8 1.6 1.7 1.6h3.2c-0.7 3.3-3.3 5.9-6.5 6.5v-3.1c0-1-0.8-1.7-1.7-1.7s-1.7 0.7-1.7 1.7v3.1c-3.2-0.6-5.8-3.2-6.5-6.5h3.2c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7h-3.2c0.7-3.3 3.3-5.8 6.5-6.5z' })
                )
            );
        }
    }]);

    return TiRadar;
}(React.Component);

exports.default = TiRadar;
module.exports = exports['default'];