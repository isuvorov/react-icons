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

var IoIosShuffleStrong = function (_React$Component) {
    _inherits(IoIosShuffleStrong, _React$Component);

    function IoIosShuffleStrong() {
        _classCallCheck(this, IoIosShuffleStrong);

        return _possibleConstructorReturn(this, (IoIosShuffleStrong.__proto__ || Object.getPrototypeOf(IoIosShuffleStrong)).apply(this, arguments));
    }

    _createClass(IoIosShuffleStrong, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.5 11.9c-6.6 0-9.3 5-11.9 9.8 0 0.3-0.2 0.4-0.3 0.6l0 0.1c-0.2 0.3-0.2 0.4-0.4 0.6-1.6 3-3.3 5.4-5.3 6.5-1.1 0.7-2.6 1.4-5.6 1.4v-2.5c3.5 0 5.9-1.4 8.7-6.5 0.2-0.3 0.2-0.5 0.4-0.7h0c0.1-0.2 0.3-0.3 0.4-0.6 2.6-5 5.9-11.2 14-11.2h1.2l-4.1-3.4 1.7-1.9 7.7 6.5-7.7 6.4-1.7-1.8 4-3.3h-1.1z m-1.2 11.1l7.7 6.4-7.7 6.5-1.7-1.9 4.1-3.4h-1.2c-6.1 0-9.5-3.5-11.9-7.4l1.4-2.6c2.2 4 5 7.5 10.5 7.5h1.1l-4-3.3z m-13.5-4.9c-2.9-5.1-5.3-6.5-8.8-6.5v-2.5c3 0 4.5 0.7 5.6 1.4 2 1.1 3.7 3.4 5.3 6.3-0.6 0.9-1.1 1.7-1.5 2.6-0.1-0.2-0.2-0.4-0.3-0.6h0c-0.2-0.2-0.2-0.4-0.3-0.7z' })
                )
            );
        }
    }]);

    return IoIosShuffleStrong;
}(React.Component);

exports.default = IoIosShuffleStrong;
module.exports = exports['default'];