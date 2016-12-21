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

var FaHeadphones = function (_React$Component) {
    _inherits(FaHeadphones, _React$Component);

    function FaHeadphones() {
        _classCallCheck(this, FaHeadphones);

        return _possibleConstructorReturn(this, (FaHeadphones.__proto__ || Object.getPrototypeOf(FaHeadphones)).apply(this, arguments));
    }

    _createClass(FaHeadphones, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm38.6 19.8q0 3.7-1.3 7l-0.4 1.1-4.2 0.7q-0.5 1.9-2 3.1t-3.5 1.2v0.7q0 0.3-0.2 0.5t-0.5 0.2h-1.4q-0.3 0-0.5-0.2t-0.2-0.5v-12.9q0-0.3 0.2-0.5t0.5-0.2h1.4q0.3 0 0.5 0.2t0.2 0.5v0.7q1.6 0 2.9 0.8t2.1 2.2l1.5-0.3q0.7-2.1 0.7-4.3 0-3.3-2-6.3t-5.3-4.6-7-1.8-7.1 1.8-5.2 4.6-2 6.3q0 2.2 0.6 4.3l1.6 0.2q0.7-1.3 2-2.1t2.9-0.8v-0.7q0-0.3 0.2-0.5t0.5-0.2h1.5q0.3 0 0.5 0.2t0.2 0.5v12.9q0 0.3-0.2 0.5t-0.5 0.2h-1.5q-0.3 0-0.5-0.2t-0.2-0.5v-0.7q-1.9 0-3.5-1.2t-2-3.1l-4.1-0.7-0.5-1.1q-1.3-3.3-1.3-7 0-3.4 1.5-6.5t4-5.4 5.9-3.7 7.2-1.3 7.1 1.3 6 3.7 4 5.4 1.5 6.5z' })
                )
            );
        }
    }]);

    return FaHeadphones;
}(React.Component);

exports.default = FaHeadphones;
module.exports = exports['default'];