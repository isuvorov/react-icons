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

var FaStumbleuponCircle = function (_React$Component) {
    _inherits(FaStumbleuponCircle, _React$Component);

    function FaStumbleuponCircle() {
        _classCallCheck(this, FaStumbleuponCircle);

        return _possibleConstructorReturn(this, (FaStumbleuponCircle.__proto__ || Object.getPrototypeOf(FaStumbleuponCircle)).apply(this, arguments));
    }

    _createClass(FaStumbleuponCircle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.3 18.7l2-0.6v-1.4q0-1.7-1.3-3t-3-1.2-3.1 1.2-1.3 3v6.3q0 0.5-0.3 0.8t-0.8 0.3-0.7-0.3-0.3-0.8v-2.6h-3.4v2.7q0 1.8 1.3 3.1t3.1 1.3q1.8 0 3.1-1.3t1.3-3.1v-6.2q0-0.4 0.3-0.7t0.8-0.4q0.4 0 0.7 0.4t0.3 0.7v1.2z m7.5 4.4v-2.7h-3.4v2.8q0 0.4-0.3 0.7t-0.7 0.3q-0.5 0-0.8-0.3t-0.3-0.7v-2.8l-2 0.6-1.3-0.6v2.7q0 1.8 1.3 3.1t3.1 1.3 3.1-1.3 1.3-3.1z m7.5-3.1q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z' })
                )
            );
        }
    }]);

    return FaStumbleuponCircle;
}(React.Component);

exports.default = FaStumbleuponCircle;
module.exports = exports['default'];