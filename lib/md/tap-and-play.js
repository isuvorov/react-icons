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

var MdTapAndPlay = function (_React$Component) {
    _inherits(MdTapAndPlay, _React$Component);

    function MdTapAndPlay() {
        _classCallCheck(this, MdTapAndPlay);

        return _possibleConstructorReturn(this, (MdTapAndPlay.__proto__ || Object.getPrototypeOf(MdTapAndPlay)).apply(this, arguments));
    }

    _createClass(MdTapAndPlay, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.4 1.7q1.3 0 2.3 1t0.9 2.3v28.4q0 1.3-0.9 2.3t-2.3 0.9h-3.6q-0.2-3.3-1.5-6.6h5.1v-21.6h-16.8v10q-1.9-0.9-3.2-1.1v-12.3q0-1.3 0.9-2.3t2.3-1.1z m-25 18.3q7.5 0 12.9 5.4t5.3 13h-3.2q0-6.2-4.5-10.6t-10.5-4.4v-3.4z m0 13.4q2 0 3.5 1.4t1.5 3.6h-5v-5z m0-6.8q4.8 0 8.2 3.5t3.4 8.3h-3.4q0-3.5-2.4-5.9t-5.8-2.5v-3.4z' })
                )
            );
        }
    }]);

    return MdTapAndPlay;
}(React.Component);

exports.default = MdTapAndPlay;
module.exports = exports['default'];