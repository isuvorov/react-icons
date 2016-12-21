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

var TiFlash = function (_React$Component) {
    _inherits(TiFlash, _React$Component);

    function TiFlash() {
        _classCallCheck(this, TiFlash);

        return _possibleConstructorReturn(this, (TiFlash.__proto__ || Object.getPrototypeOf(TiFlash)).apply(this, arguments));
    }

    _createClass(TiFlash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.2 20.1l-7.1-4.1 3.6-8.6c0.1-0.2 0.1-0.5 0.1-0.7 0-1-0.7-1.7-1.6-1.7-0.4 0-0.8 0.1-1.1 0.4 0 0 0 0-0.1 0.1l-12.5 11.8c-0.4 0.3-0.6 0.9-0.5 1.4s0.4 1 0.8 1.2l7.1 4.1-3.6 8.7c-0.3 0.7-0.1 1.6 0.6 2 0.3 0.2 0.6 0.3 0.9 0.3 0.4 0 0.9-0.2 1.2-0.5l12.5-11.8c0.4-0.4 0.5-0.9 0.5-1.4-0.1-0.5-0.4-1-0.8-1.2z' })
                )
            );
        }
    }]);

    return TiFlash;
}(React.Component);

exports.default = TiFlash;
module.exports = exports['default'];