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

var FaGoogle = function (_React$Component) {
    _inherits(FaGoogle, _React$Component);

    function FaGoogle() {
        _classCallCheck(this, FaGoogle);

        return _possibleConstructorReturn(this, (FaGoogle.__proto__ || Object.getPrototypeOf(FaGoogle)).apply(this, arguments));
    }

    _createClass(FaGoogle, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20.1 17.5h16.2q0.3 1.5 0.3 2.9 0 4.8-2 8.7t-5.8 5.9-8.7 2.1q-3.5 0-6.6-1.3t-5.5-3.7-3.7-5.4-1.3-6.7 1.3-6.7 3.7-5.4 5.5-3.7 6.6-1.3q6.7 0 11.5 4.4l-4.6 4.5q-2.8-2.6-6.9-2.6-2.8 0-5.3 1.4t-3.9 4-1.4 5.4 1.4 5.4 3.9 4 5.3 1.4q2 0 3.6-0.5t2.7-1.3 1.8-1.9 1.2-1.9 0.5-1.8h-9.8v-5.9z' })
                )
            );
        }
    }]);

    return FaGoogle;
}(React.Component);

exports.default = FaGoogle;
module.exports = exports['default'];