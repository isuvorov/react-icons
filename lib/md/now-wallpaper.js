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

var MdNowWallpaper = function (_React$Component) {
    _inherits(MdNowWallpaper, _React$Component);

    function MdNowWallpaper() {
        _classCallCheck(this, MdNowWallpaper);

        return _possibleConstructorReturn(this, (MdNowWallpaper.__proto__ || Object.getPrototypeOf(MdNowWallpaper)).apply(this, arguments));
    }

    _createClass(MdNowWallpaper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm6.6 21.6v11.8h11.8v3.2h-11.8q-1.3 0-2.3-0.9t-0.9-2.3v-11.8h3.2z m26.8 11.8v-11.8h3.2v11.8q0 1.3-0.9 2.3t-2.3 0.9h-11.8v-3.2h11.8z m0-30q1.3 0 2.3 0.9t0.9 2.3v11.8h-3.2v-11.8h-11.8v-3.2h11.8z m-5 10.7q0 1.1-0.8 1.8t-1.7 0.7-1.8-0.7-0.7-1.8 0.7-1.7 1.8-0.8 1.7 0.8 0.8 1.7z m-11.8 7.5l5 6.2 3.4-4.4 5 6.6h-20z m-10-15v11.8h-3.2v-11.8q0-1.3 0.9-2.3t2.3-0.9h11.8v3.2h-11.8z' })
                )
            );
        }
    }]);

    return MdNowWallpaper;
}(React.Component);

exports.default = MdNowWallpaper;
module.exports = exports['default'];