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

var FaMapO = function (_React$Component) {
    _inherits(FaMapO, _React$Component);

    function FaMapO() {
        _classCallCheck(this, FaMapO);

        return _possibleConstructorReturn(this, (FaMapO.__proto__ || Object.getPrototypeOf(FaMapO)).apply(this, arguments));
    }

    _createClass(FaMapO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.2 2.8q0.6 0.4 0.6 1.1v27.3q0 0.4-0.3 0.7t-0.5 0.4l-12.4 5q-0.5 0.2-1 0l-11.9-4.8-12 4.8q-0.2 0.1-0.5 0.1-0.3 0-0.7-0.2-0.5-0.4-0.5-1.1v-27.3q0-0.4 0.2-0.7t0.6-0.4l12.4-5q0.5-0.2 0.9 0l12 4.8 11.9-4.8q0.7-0.2 1.2 0.1z m-24.9 2.6v24.7l11.2 4.5v-24.7z m-11.8 4.3v24.6l10.5-4.2v-24.7z m34.8 20.6v-24.6l-10.6 4.2v24.7z' })
                )
            );
        }
    }]);

    return FaMapO;
}(React.Component);

exports.default = FaMapO;
module.exports = exports['default'];