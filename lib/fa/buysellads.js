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

var FaBuysellads = function (_React$Component) {
    _inherits(FaBuysellads, _React$Component);

    function FaBuysellads() {
        _classCallCheck(this, FaBuysellads);

        return _possibleConstructorReturn(this, (FaBuysellads.__proto__ || Object.getPrototypeOf(FaBuysellads)).apply(this, arguments));
    }

    _createClass(FaBuysellads, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.4 24.2h-6.5l3.2-12.3z m1.9 7.2h7l-7.2-22.8h-9.9l-7.2 22.8h6.9l8.6-7z m12-22.1v21.4q0 2.6-1.9 4.5t-4.5 1.9h-21.5q-2.6 0-4.5-1.9t-1.9-4.5v-21.4q0-2.6 1.9-4.5t4.5-1.9h21.5q2.6 0 4.5 1.9t1.9 4.5z' })
                )
            );
        }
    }]);

    return FaBuysellads;
}(React.Component);

exports.default = FaBuysellads;
module.exports = exports['default'];