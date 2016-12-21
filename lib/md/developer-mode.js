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

var MdDeveloperMode = function (_React$Component) {
    _inherits(MdDeveloperMode, _React$Component);

    function MdDeveloperMode() {
        _classCallCheck(this, MdDeveloperMode);

        return _possibleConstructorReturn(this, (MdDeveloperMode.__proto__ || Object.getPrototypeOf(MdDeveloperMode)).apply(this, arguments));
    }

    _createClass(MdDeveloperMode, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 31.6v-3.2h3.2v6.6c0 1.8-1.4 3.4-3.2 3.4h-16.8c-1.8 0-3.2-1.6-3.2-3.4v-6.6h3.2v3.2h16.8z m-11.8-6.3l-2.3 2.4-7.7-7.7 7.7-7.7 2.3 2.4-5.2 5.3z m9.1 2.4l-2.3-2.4 5.2-5.3-5.2-5.3 2.3-2.4 7.7 7.7z m-14.1-19.3v3.2h-3.2v-6.6c0-1.8 1.4-3.4 3.2-3.4l16.8 0.1c1.8 0 3.2 1.5 3.2 3.3v6.6h-3.2v-3.2h-16.8z' })
                )
            );
        }
    }]);

    return MdDeveloperMode;
}(React.Component);

exports.default = MdDeveloperMode;
module.exports = exports['default'];