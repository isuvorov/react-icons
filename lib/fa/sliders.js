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

var FaSliders = function (_React$Component) {
    _inherits(FaSliders, _React$Component);

    function FaSliders() {
        _classCallCheck(this, FaSliders);

        return _possibleConstructorReturn(this, (FaSliders.__proto__ || Object.getPrototypeOf(FaSliders)).apply(this, arguments));
    }

    _createClass(FaSliders, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10.9 31.4v2.9h-7.9v-2.9h7.9z m7.8-2.8q0.6 0 1 0.4t0.4 1v5.7q0 0.6-0.4 1t-1 0.4h-5.7q-0.6 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.4h5.7z m3.6-8.6v2.9h-19.3v-2.9h19.3z m-14.3-11.4v2.8h-5v-2.8h5z m29.3 22.8v2.9h-16.4v-2.9h16.4z m-21.4-25.7q0.5 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4h-5.8q-0.5 0-1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1-0.4h5.8z m14.2 11.4q0.6 0 1 0.5t0.5 1v5.7q0 0.6-0.5 1t-1 0.4h-5.7q-0.5 0-1-0.4t-0.4-1v-5.7q0-0.6 0.4-1t1-0.5h5.7z m7.2 2.9v2.9h-5v-2.9h5z m0-11.4v2.8h-19.3v-2.8h19.3z' })
                )
            );
        }
    }]);

    return FaSliders;
}(React.Component);

exports.default = FaSliders;
module.exports = exports['default'];