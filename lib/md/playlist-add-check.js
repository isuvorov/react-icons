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

var MdPlaylistAddCheck = function (_React$Component) {
    _inherits(MdPlaylistAddCheck, _React$Component);

    function MdPlaylistAddCheck() {
        _classCallCheck(this, MdPlaylistAddCheck);

        return _possibleConstructorReturn(this, (MdPlaylistAddCheck.__proto__ || Object.getPrototypeOf(MdPlaylistAddCheck)).apply(this, arguments));
    }

    _createClass(MdPlaylistAddCheck, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.9 19.1l2.5 2.5-11.7 11.8-7.6-7.5 2.5-2.5 5.1 5z m-32.5 7.5v-3.2h13.2v3.2h-13.2z m20-16.6v3.4h-20v-3.4h20z m0 6.6v3.4h-20v-3.4h20z' })
                )
            );
        }
    }]);

    return MdPlaylistAddCheck;
}(React.Component);

exports.default = MdPlaylistAddCheck;
module.exports = exports['default'];