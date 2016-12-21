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

var MdSlowMotionVideo = function (_React$Component) {
    _inherits(MdSlowMotionVideo, _React$Component);

    function MdSlowMotionVideo() {
        _classCallCheck(this, MdSlowMotionVideo);

        return _possibleConstructorReturn(this, (MdSlowMotionVideo.__proto__ || Object.getPrototypeOf(MdSlowMotionVideo)).apply(this, arguments));
    }

    _createClass(MdSlowMotionVideo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm36.6 20q0 6.4-4.3 11.2t-10.6 5.4v-3.4q4.9-0.6 8.3-4.4t3.4-8.8-3.4-8.8-8.3-4.4v-3.4q6.3 0.7 10.6 5.4t4.3 11.2z m-27.1 12.9l2.3-2.4q2.9 2.2 6.6 2.7v3.4q-5-0.5-8.9-3.7z m-2.7-11.3q0.5 3.7 2.7 6.5l-2.4 2.5q-3.2-4-3.7-9h3.4z m2.7-9.8q-2.2 2.9-2.7 6.6h-3.4q0.5-5 3.7-8.9z m8.9-5q-3.7 0.5-6.6 2.7l-2.3-2.4q3.9-3.2 8.9-3.7v3.4z m3.3 9.5l4.9 3.7q-4.9 3.7-10 7.5z' })
                )
            );
        }
    }]);

    return MdSlowMotionVideo;
}(React.Component);

exports.default = MdSlowMotionVideo;
module.exports = exports['default'];