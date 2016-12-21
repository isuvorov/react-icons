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

var TiHtml5 = function (_React$Component) {
    _inherits(TiHtml5, _React$Component);

    function TiHtml5() {
        _classCallCheck(this, TiHtml5);

        return _possibleConstructorReturn(this, (TiHtml5.__proto__ || Object.getPrototypeOf(TiHtml5)).apply(this, arguments));
    }

    _createClass(TiHtml5, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm21.8 5.8l1.2 1.9 1.2-1.9v2.5h1.6v-5h-1.6l-1.2 1.9-1-1.9h-1.8v5h1.6z m8.9 2.5v-1.6h-2.4v-3.4h-1.6v5z m-14.4 0h1.7v-3.3h1.5v-1.7h-4.7v1.7h1.5z m-5.3-1.6h1.5v1.6h1.7v-5h-1.7v1.7h-1.5v-1.7h-1.7v5h1.7z m-2.7 3.3l2 24 9.7 2.7 9.7-2.7 2-24h-23.4z m18.9 7.7h-11.4l0.4 3h10.6l-0.8 9.1-6 1.7-6-1.7-0.5-4.8h3l0.2 2.5 3.3 0.8 3.3-0.8 0.4-3.8h-10.4l-0.8-8.9h15l-0.3 2.9z' })
                )
            );
        }
    }]);

    return TiHtml5;
}(React.Component);

exports.default = TiHtml5;
module.exports = exports['default'];