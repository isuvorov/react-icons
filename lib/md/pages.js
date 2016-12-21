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

var MdPages = function (_React$Component) {
    _inherits(MdPages, _React$Component);

    function MdPages() {
        _classCallCheck(this, MdPages);

        return _possibleConstructorReturn(this, (MdPages.__proto__ || Object.getPrototypeOf(MdPages)).apply(this, arguments));
    }

    _createClass(MdPages, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 5c1.8 0 3.4 1.6 3.4 3.4v10h-8.4l1.8-6.8-6.8 1.8v-8.4h10z m-3.2 23.4l-1.8-6.8h8.4v10c0 1.8-1.6 3.4-3.4 3.4h-10v-8.4z m-15-6.8l-1.8 6.8 6.8-1.8v8.4h-10c-1.8 0-3.4-1.6-3.4-3.4v-10h8.4z m-8.4-13.2c0-1.8 1.6-3.4 3.4-3.4h10v8.4l-6.8-1.8 1.8 6.8h-8.4v-10z' })
                )
            );
        }
    }]);

    return MdPages;
}(React.Component);

exports.default = MdPages;
module.exports = exports['default'];