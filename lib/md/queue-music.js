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

var MdQueueMusic = function (_React$Component) {
    _inherits(MdQueueMusic, _React$Component);

    function MdQueueMusic() {
        _classCallCheck(this, MdQueueMusic);

        return _possibleConstructorReturn(this, (MdQueueMusic.__proto__ || Object.getPrototypeOf(MdQueueMusic)).apply(this, arguments));
    }

    _createClass(MdQueueMusic, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 10h8.2v3.4h-5v15c0 2.7-2.2 5-5 5s-5-2.3-5-5 2.3-5 5-5c0.6 0 1.2 0.1 1.8 0.3v-13.7z m-23.4 16.6v-3.2h13.4v3.2h-13.4z m20-10v3.4h-20v-3.4h20z m0-6.6v3.4h-20v-3.4h20z' })
                )
            );
        }
    }]);

    return MdQueueMusic;
}(React.Component);

exports.default = MdQueueMusic;
module.exports = exports['default'];