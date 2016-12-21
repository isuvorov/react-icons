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

var TiTrash = function (_React$Component) {
    _inherits(TiTrash, _React$Component);

    function TiTrash() {
        _classCallCheck(this, TiTrash);

        return _possibleConstructorReturn(this, (TiTrash.__proto__ || Object.getPrototypeOf(TiTrash)).apply(this, arguments));
    }

    _createClass(TiTrash, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm30 11.7h-1.7v-1.7c0-1.8-1.5-3.3-3.3-3.3h-11.7c-1.8 0-3.3 1.5-3.3 3.3v1.7h-1.7c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.7 1.6 1.7v13.3c0 3.7 3 6.7 6.7 6.7h8.3c3.7 0 6.7-3 6.7-6.7v-13.3c0.9 0 1.7-0.7 1.7-1.7s-0.8-1.6-1.7-1.6z m-16.7-1.7h11.7v1.7h-11.7v-1.7z m13.4 18.3c0 1.9-1.5 3.4-3.4 3.4h-8.3c-1.8 0-3.3-1.5-3.3-3.4v-13.3h15v13.3z m-12.5-10.8c-0.5 0-0.9 0.4-0.9 0.8v10c0 0.5 0.4 0.9 0.9 0.9s0.8-0.4 0.8-0.9v-10c0-0.4-0.4-0.8-0.8-0.8z m3.3 0c-0.5 0-0.8 0.4-0.8 0.8v10c0 0.5 0.3 0.9 0.8 0.9s0.8-0.4 0.8-0.9v-10c0-0.4-0.3-0.8-0.8-0.8z m3.3 0c-0.4 0-0.8 0.4-0.8 0.8v10c0 0.5 0.4 0.9 0.8 0.9s0.9-0.4 0.9-0.9v-10c0-0.4-0.4-0.8-0.9-0.8z m3.4 0c-0.5 0-0.9 0.4-0.9 0.8v10c0 0.5 0.4 0.9 0.9 0.9s0.8-0.4 0.8-0.9v-10c0-0.4-0.4-0.8-0.8-0.8z' })
                )
            );
        }
    }]);

    return TiTrash;
}(React.Component);

exports.default = TiTrash;
module.exports = exports['default'];