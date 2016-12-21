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

var FaBriefcase = function (_React$Component) {
    _inherits(FaBriefcase, _React$Component);

    function FaBriefcase() {
        _classCallCheck(this, FaBriefcase);

        return _possibleConstructorReturn(this, (FaBriefcase.__proto__ || Object.getPrototypeOf(FaBriefcase)).apply(this, arguments));
    }

    _createClass(FaBriefcase, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.3 5.7h11.4v-2.8h-11.4v2.8z m25.7 14.3v10.7q0 1.5-1 2.5t-2.6 1.1h-32.8q-1.5 0-2.6-1.1t-1-2.5v-10.7h15v3.6q0 0.5 0.4 1t1 0.4h7.2q0.6 0 1-0.4t0.4-1v-3.6h15z m-17.1 0v2.9h-5.8v-2.9h5.8z m17.1-10.7v8.6h-40v-8.6q0-1.5 1.1-2.5t2.5-1.1h7.8v-3.6q0-0.8 0.7-1.5t1.5-0.6h12.8q0.9 0 1.5 0.6t0.7 1.5v3.6h7.8q1.5 0 2.6 1.1t1 2.5z' })
                )
            );
        }
    }]);

    return FaBriefcase;
}(React.Component);

exports.default = FaBriefcase;
module.exports = exports['default'];