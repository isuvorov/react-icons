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

var MdArtTrack = function (_React$Component) {
    _inherits(MdArtTrack, _React$Component);

    function MdArtTrack() {
        _classCallCheck(this, MdArtTrack);

        return _possibleConstructorReturn(this, (MdArtTrack.__proto__ || Object.getPrototypeOf(MdArtTrack)).apply(this, arguments));
    }

    _createClass(MdArtTrack, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 25l-3.7-5-2.9 3.8-2.1-2.5-2.9 3.7h11.6z m2.5-10v10c0 1.8-1.6 3.4-3.4 3.4h-10c-1.8 0-3.2-1.6-3.2-3.4v-10c0-1.8 1.4-3.4 3.2-3.4h10c1.8 0 3.4 1.6 3.4 3.4z m3.4 13.4v-3.4h13.2v3.4h-13.2z m13.2-16.8v3.4h-13.2v-3.4h13.2z m0 10h-13.2v-3.2h13.2v3.2z' })
                )
            );
        }
    }]);

    return MdArtTrack;
}(React.Component);

exports.default = MdArtTrack;
module.exports = exports['default'];