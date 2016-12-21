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

var FaMaxcdn = function (_React$Component) {
    _inherits(FaMaxcdn, _React$Component);

    function FaMaxcdn() {
        _classCallCheck(this, FaMaxcdn);

        return _possibleConstructorReturn(this, (FaMaxcdn.__proto__ || Object.getPrototypeOf(FaMaxcdn)).apply(this, arguments));
    }

    _createClass(FaMaxcdn, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm39.5 17.3l-3.7 17h-7.5l4-18.6q0.3-1.2-0.3-1.9-0.6-0.8-1.9-0.8h-3.8l-4.5 21.3h-7.5l4.6-21.3h-6.4l-4.5 21.3h-7.5l4.6-21.3-3.5-7.3h28.5q2.3 0 4.2 0.9t3.3 2.6q1.4 1.6 1.9 3.7t0 4.4z' })
                )
            );
        }
    }]);

    return FaMaxcdn;
}(React.Component);

exports.default = FaMaxcdn;
module.exports = exports['default'];