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

var MdCopyright = function (_React$Component) {
    _inherits(MdCopyright, _React$Component);

    function MdCopyright() {
        _classCallCheck(this, MdCopyright);

        return _possibleConstructorReturn(this, (MdCopyright.__proto__ || Object.getPrototypeOf(MdCopyright)).apply(this, arguments));
    }

    _createClass(MdCopyright, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 33.4c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m-0.2 11.8c-2.4 0-3.2 2.2-3.2 4.6v0.4c0 2.4 0.8 4.6 3.2 4.6 1.4 0 2.7-0.9 2.7-2.4h3c0 1.5-0.9 2.7-1.8 3.5-1 0.8-2.1 1.4-3.9 1.4-4.3 0-6.4-2.8-6.4-7.1v-0.4c0-2 0.5-3.9 1.5-5 1.1-1.2 2.7-2.1 4.9-2.1 1.7 0 3.1 0.6 4 1.4 0.9 0.9 1.7 2.2 1.7 3.9h-3c0-0.4-0.1-0.7-0.2-1s-0.4-0.7-0.6-1c-0.4-0.4-1.1-0.8-1.9-0.8z' })
                )
            );
        }
    }]);

    return MdCopyright;
}(React.Component);

exports.default = MdCopyright;
module.exports = exports['default'];