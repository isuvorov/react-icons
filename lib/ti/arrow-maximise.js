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

var TiArrowMaximise = function (_React$Component) {
    _inherits(TiArrowMaximise, _React$Component);

    function TiArrowMaximise() {
        _classCallCheck(this, TiArrowMaximise);

        return _possibleConstructorReturn(this, (TiArrowMaximise.__proto__ || Object.getPrototypeOf(TiArrowMaximise)).apply(this, arguments));
    }

    _createClass(TiArrowMaximise, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25 6.7c-0.9 0-1.7 0.7-1.7 1.6s0.8 1.7 1.7 1.7h2.6l-5.4 5.5c-0.7 0.6-0.7 1.7 0 2.3 0.3 0.4 0.7 0.5 1.1 0.5s0.9-0.1 1.2-0.5l5.5-5.4v2.6c0 0.9 0.7 1.7 1.7 1.7s1.6-0.8 1.6-1.7v-8.3h-8.3z m-9.5 15.5l-5.5 5.4v-2.6c0-0.9-0.7-1.7-1.7-1.7s-1.6 0.8-1.6 1.7v8.3h1.6l6.7 0c0.9 0 1.7-0.7 1.7-1.6s-0.8-1.7-1.7-1.7h-2.6l5.4-5.5c0.7-0.6 0.7-1.7 0-2.3s-1.7-0.7-2.3 0z m-3.8-2.2c0.9 0 1.6-0.7 1.6-1.7v-5h5c1 0 1.7-0.7 1.7-1.6s-0.7-1.7-1.7-1.7h-8.3l0 8.3c0 1 0.7 1.7 1.7 1.7z m16.6 0c-0.9 0-1.6 0.7-1.6 1.7v5h-5c-1 0-1.7 0.7-1.7 1.6s0.7 1.7 1.7 1.7h8.3v-8.3c0-0.9-0.7-1.7-1.7-1.7z' })
                )
            );
        }
    }]);

    return TiArrowMaximise;
}(React.Component);

exports.default = TiArrowMaximise;
module.exports = exports['default'];