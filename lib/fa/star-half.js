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

var FaStarHalf = function (_React$Component) {
    _inherits(FaStarHalf, _React$Component);

    function FaStarHalf() {
        _classCallCheck(this, FaStarHalf);

        return _possibleConstructorReturn(this, (FaStarHalf.__proto__ || Object.getPrototypeOf(FaStarHalf)).apply(this, arguments));
    }

    _createClass(FaStarHalf, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.1 0.7v29.9l-10 5.3q-0.5 0.2-0.9 0.2-0.5 0-0.7-0.3t-0.3-0.8q0-0.1 0.1-0.4l1.9-11.2-8.1-7.9q-0.6-0.6-0.6-1.1 0-0.8 1.3-1l11.2-1.6 5-10.2q0.4-0.9 1.1-0.9z' })
                )
            );
        }
    }]);

    return FaStarHalf;
}(React.Component);

exports.default = FaStarHalf;
module.exports = exports['default'];