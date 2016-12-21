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

var TiPlaneOutline = function (_React$Component) {
    _inherits(TiPlaneOutline, _React$Component);

    function TiPlaneOutline() {
        _classCallCheck(this, TiPlaneOutline);

        return _possibleConstructorReturn(this, (TiPlaneOutline.__proto__ || Object.getPrototypeOf(TiPlaneOutline)).apply(this, arguments));
    }

    _createClass(TiPlaneOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 20.7l-8.3-4.8v-8c0-3.2-2.7-5.8-5.9-5.8s-5.8 2.6-5.8 5.8v8l-8.3 4.8c-2.2 1.2-3.1 3.9-2.1 6.2 0.9 2.4 3.5 3.6 5.9 2.9l4.5-1.3v1.4l-1.5 1.2c-2 1.6-2.4 4.4-1 6.6 1.3 2.1 4.1 2.9 6.4 1.8 0 0 0.8-0.3 1.9-0.3s2 0.3 2 0.3c2.3 1.1 5 0.4 6.4-1.8 1.4-2.2 0.9-5-1.1-6.6l-1.4-1.2v-1.4l4.4 1.3c2.5 0.7 5-0.5 6-2.9s0.1-5-2.1-6.2z m-1 4.9c-0.3 0.8-1.1 1.2-2 1l-8.7-2.5v7.4l2.7 2.2c0.7 0.5 0.9 1.5 0.4 2.2-0.5 0.7-1.4 1-2.1 0.6-0.1 0-1.4-0.7-3.5-0.7s-3.4 0.7-3.4 0.7c-0.8 0.4-1.7 0.1-2.1-0.6-0.5-0.7-0.3-1.7 0.3-2.2l2.7-2.2v-7.4l-8.7 2.5c-0.8 0.2-1.6-0.2-2-1-0.3-0.7 0-1.6 0.7-2l10-5.8v-9.9c0-1.4 1.2-2.5 2.5-2.5s2.5 1.1 2.5 2.5v9.9l10 5.8c0.8 0.4 1.1 1.3 0.7 2z m-12.3-18.1c0 0.5-0.4 0.8-0.9 0.8s-0.8-0.3-0.8-0.8c0-0.5 0.4-0.8 0.8-0.8s0.9 0.3 0.9 0.8z' })
                )
            );
        }
    }]);

    return TiPlaneOutline;
}(React.Component);

exports.default = TiPlaneOutline;
module.exports = exports['default'];