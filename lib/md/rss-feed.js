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

var MdRssFeed = function (_React$Component) {
    _inherits(MdRssFeed, _React$Component);

    function MdRssFeed() {
        _classCallCheck(this, MdRssFeed);

        return _possibleConstructorReturn(this, (MdRssFeed.__proto__ || Object.getPrototypeOf(MdRssFeed)).apply(this, arguments));
    }

    _createClass(MdRssFeed, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.6 16.8c9.2 0 16.6 7.4 16.6 16.6h-4.8c0-6.5-5.3-11.8-11.8-11.8v-4.8z m0-9.4c14.3 0 26 11.7 26 26h-4.7c0-11.8-9.5-21.3-21.3-21.3v-4.7z m0 22.3c0-2 1.7-3.6 3.7-3.6s3.6 1.6 3.6 3.6-1.6 3.7-3.6 3.7-3.7-1.7-3.7-3.7z' })
                )
            );
        }
    }]);

    return MdRssFeed;
}(React.Component);

exports.default = MdRssFeed;
module.exports = exports['default'];