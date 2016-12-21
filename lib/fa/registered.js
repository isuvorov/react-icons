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

var FaRegistered = function (_React$Component) {
    _inherits(FaRegistered, _React$Component);

    function FaRegistered() {
        _classCallCheck(this, FaRegistered);

        return _possibleConstructorReturn(this, (FaRegistered.__proto__ || Object.getPrototypeOf(FaRegistered)).apply(this, arguments));
    }

    _createClass(FaRegistered, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.3 15.7q0-2-1.4-2.7-0.7-0.4-2.6-0.4h-2.7v6.3h3.6q1.5 0 2.3-0.9t0.8-2.3z m1.1 6.4l4.6 8.3q0.2 0.4 0 0.7-0.2 0.3-0.6 0.3h-3.4q-0.5 0-0.6-0.4l-4.4-8.1h-3.4v7.8q0 0.3-0.2 0.5t-0.5 0.2h-3q-0.4 0-0.6-0.2t-0.2-0.5v-21.4q0-0.3 0.2-0.5t0.6-0.2h6.5q2.9 0 4.3 0.5 1.9 0.7 3 2.4t1 4.1q0 2-0.9 3.7t-2.6 2.4q0.2 0.2 0.2 0.4z m-4.4-18.5q-3.3 0-6.4 1.3t-5.2 3.5-3.5 5.2-1.3 6.4 1.3 6.4 3.5 5.2 5.2 3.5 6.4 1.3 6.4-1.3 5.2-3.5 3.5-5.2 1.3-6.4-1.3-6.4-3.5-5.2-5.2-3.5-6.4-1.3z m20 16.4q0 4.1-1.6 7.8t-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6 7.8 1.6 6.4 4.2 4.2 6.4 1.6 7.8z' })
                )
            );
        }
    }]);

    return FaRegistered;
}(React.Component);

exports.default = FaRegistered;
module.exports = exports['default'];