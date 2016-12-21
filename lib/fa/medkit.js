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

var FaMedkit = function (_React$Component) {
    _inherits(FaMedkit, _React$Component);

    function FaMedkit() {
        _classCallCheck(this, FaMedkit);

        return _possibleConstructorReturn(this, (FaMedkit.__proto__ || Object.getPrototypeOf(FaMedkit)).apply(this, arguments));
    }

    _createClass(FaMedkit, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.6 25v-4.3q0-0.3-0.2-0.5t-0.5-0.2h-5v-5q0-0.3-0.2-0.5t-0.6-0.2h-4.2q-0.4 0-0.6 0.2t-0.2 0.5v5h-5q-0.3 0-0.5 0.2t-0.2 0.5v4.3q0 0.3 0.2 0.5t0.5 0.2h5v5q0 0.3 0.2 0.5t0.6 0.2h4.2q0.4 0 0.6-0.2t0.2-0.5v-5h5q0.3 0 0.5-0.2t0.2-0.5z m-14.3-16.4h11.4v-2.9h-11.4v2.9z m-8.6 0v28.5h-0.7q-2.1 0-3.5-1.4t-1.5-3.6v-18.5q0-2.1 1.5-3.6t3.5-1.4h0.7z m26.4 0v28.5h-24.2v-28.5h3.5v-3.6q0-0.9 0.7-1.5t1.5-0.6h12.8q0.9 0 1.5 0.6t0.7 1.5v3.6h3.5z m7.9 5v18.5q0 2.1-1.5 3.6t-3.5 1.4h-0.7v-28.5h0.7q2.1 0 3.5 1.4t1.5 3.6z' })
                )
            );
        }
    }]);

    return FaMedkit;
}(React.Component);

exports.default = FaMedkit;
module.exports = exports['default'];