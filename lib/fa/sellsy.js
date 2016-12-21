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

var FaSellsy = function (_React$Component) {
    _inherits(FaSellsy, _React$Component);

    function FaSellsy() {
        _classCallCheck(this, FaSellsy);

        return _possibleConstructorReturn(this, (FaSellsy.__proto__ || Object.getPrototypeOf(FaSellsy)).apply(this, arguments));
    }

    _createClass(FaSellsy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.1 29.2v-14.2q0-0.4-0.3-0.7t-0.7-0.3h-1.8q-0.3 0-0.6 0.3t-0.3 0.7v14.2q0 0.4 0.3 0.7t0.6 0.3h1.8q0.4 0 0.7-0.3t0.3-0.7z m-5.5 0v-10.3q0-0.4-0.3-0.7t-0.7-0.3h-1.9q-0.4 0-0.7 0.3t-0.3 0.7v10.3q0 0.4 0.3 0.7t0.7 0.3h1.9q0.4 0 0.7-0.3t0.3-0.7z m-5.7 0v-8.3q0-0.4-0.3-0.7t-0.6-0.3h-2q-0.4 0-0.7 0.3t-0.3 0.7v8.3q0 0.4 0.3 0.7t0.7 0.3h2q0.4 0 0.6-0.3t0.3-0.7z m-5.6 0v-7q0-0.4-0.3-0.7t-0.7-0.3h-2q-0.4 0-0.6 0.3t-0.3 0.7v7q0 0.4 0.3 0.7t0.6 0.3h2q0.4 0 0.7-0.3t0.3-0.7z m27.5-2.8q0 3.2-2.3 5.5t-5.6 2.3h-24.1q-3.2 0-5.5-2.3t-2.3-5.5q0-2.3 1.2-4.2t3.3-2.9q-0.2-0.6-0.2-1.4 0-2.2 1.6-3.7t3.7-1.6q2 0 3.5 1.3 0.9-3.5 3.8-5.8t6.5-2.3q2.9 0 5.4 1.4t3.8 3.9 1.5 5.3q0 1.3-0.3 2.4 2.6 0.7 4.3 2.8t1.7 4.8z' })
                )
            );
        }
    }]);

    return FaSellsy;
}(React.Component);

exports.default = FaSellsy;
module.exports = exports['default'];