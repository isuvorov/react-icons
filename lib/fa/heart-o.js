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

var FaHeartO = function (_React$Component) {
    _inherits(FaHeartO, _React$Component);

    function FaHeartO() {
        _classCallCheck(this, FaHeartO);

        return _possibleConstructorReturn(this, (FaHeartO.__proto__ || Object.getPrototypeOf(FaHeartO)).apply(this, arguments));
    }

    _createClass(FaHeartO, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm37.1 13.3q0-1.8-0.4-3.2t-1.3-2.2-1.8-1.3-2.1-0.7-2.2-0.2-2.5 0.6-2.4 1.4-2 1.6-1.3 1.4q-0.4 0.5-1.1 0.5t-1.1-0.5q-0.5-0.6-1.3-1.4t-2-1.6-2.4-1.4-2.5-0.6-2.2 0.2-2.1 0.7-1.8 1.3-1.3 2.2-0.4 3.2q0 3.8 4.1 7.9l13 12.5 12.9-12.4q4.2-4.2 4.2-8z m2.9 0q0 4.9-5.1 10l-13.9 13.4q-0.4 0.4-1 0.4t-1-0.4l-13.9-13.4q-0.2-0.2-0.6-0.6t-1.3-1.4-1.5-2.2-1.2-2.7-0.5-3.1q0-4.9 2.8-7.7t7.9-2.7q1.4 0 2.8 0.4t2.7 1.3 2.1 1.6 1.7 1.5q0.8-0.8 1.7-1.5t2.1-1.6 2.7-1.3 2.8-0.4q5 0 7.9 2.7t2.8 7.7z' })
                )
            );
        }
    }]);

    return FaHeartO;
}(React.Component);

exports.default = FaHeartO;
module.exports = exports['default'];