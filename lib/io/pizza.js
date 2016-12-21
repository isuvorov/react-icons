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

var IoPizza = function (_React$Component) {
    _inherits(IoPizza, _React$Component);

    function IoPizza() {
        _classCallCheck(this, IoPizza);

        return _possibleConstructorReturn(this, (IoPizza.__proto__ || Object.getPrototypeOf(IoPizza)).apply(this, arguments));
    }

    _createClass(IoPizza, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30.6 10.2c0.8 0.3 0.9 1 0.7 1.5l-11.5 25.8s-11.2-25-11.6-25.9 0.1-1.2 0.7-1.4c3-1.4 7-2.2 10.8-2.2s7.5 0.7 10.9 2.2z m-15.8 4.8c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m5 11.5c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m5-9c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1 2.5 2.5 2.5z m7.9-12.3c0.5 0.2 0.8 0.4 0.8 1 0 0.1 0 0.2-0.1 0.4l-0.6 1.4c-0.2 0.4-0.6 0.8-1.1 0.8-0.1 0-0.2-0.1-0.5-0.2-3.2-1.4-7.4-2.3-11.5-2.3s-7.9 0.8-11.4 2.3c-0.3 0.1-0.3 0.2-0.5 0.2-0.5 0-0.9-0.4-1.1-0.8l-0.6-1.4s-0.1-0.2-0.1-0.4c0-0.7 0.5-1 0.8-1.1 3.8-1.7 8.3-2.6 13-2.6s9.2 1 12.9 2.7z' })
                )
            );
        }
    }]);

    return IoPizza;
}(React.Component);

exports.default = IoPizza;
module.exports = exports['default'];