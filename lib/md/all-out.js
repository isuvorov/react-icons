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

var MdAllOut = function (_React$Component) {
    _inherits(MdAllOut, _React$Component);

    function MdAllOut() {
        _classCallCheck(this, MdAllOut);

        return _possibleConstructorReturn(this, (MdAllOut.__proto__ || Object.getPrototypeOf(MdAllOut)).apply(this, arguments));
    }

    _createClass(MdAllOut, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.8 26.7c3.5-3.5 3.5-9.4 0-12.9s-9.4-3.5-12.9 0-3.5 9.4 0 12.9 9.4 3.5 12.9 0z m1.8-14.7c4.5 4.6 4.5 12 0 16.5s-12 4.5-16.5 0-4.5-11.9 0-16.5 12-4.5 16.5 0z m-21.6 1.6v-6.6h6.7z m6.7 20h-6.7v-6.6z m20-6.6v6.6h-6.7z m-6.7-20h6.7v6.6z' })
                )
            );
        }
    }]);

    return MdAllOut;
}(React.Component);

exports.default = MdAllOut;
module.exports = exports['default'];