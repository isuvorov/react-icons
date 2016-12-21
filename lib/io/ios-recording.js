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

var IoIosRecording = function (_React$Component) {
    _inherits(IoIosRecording, _React$Component);

    function IoIosRecording() {
        _classCallCheck(this, IoIosRecording);

        return _possibleConstructorReturn(this, (IoIosRecording.__proto__ || Object.getPrototypeOf(IoIosRecording)).apply(this, arguments));
    }

    _createClass(IoIosRecording, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm29.9 11.3c4.8 0 8.6 3.9 8.6 8.7s-3.8 8.8-8.6 8.8h-20.3c-4.8 0-8.6-4-8.6-8.8s3.8-8.7 8.6-8.7 8.6 3.9 8.6 8.7c0 3.1-1.7 5.9-4.2 7.4h11.4c-2.5-1.5-4.1-4.3-4.1-7.4 0-4.8 3.8-8.7 8.6-8.7z m-20.1 13.7c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.2 5 5 5z m20 0c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.2 5 5 5z m0-8.7c2 0 3.7 1.7 3.7 3.7s-1.7 3.8-3.7 3.8-3.8-1.8-3.8-3.8 1.7-3.7 3.8-3.7z m-20 0c2 0 3.7 1.7 3.7 3.7s-1.7 3.8-3.7 3.8-3.8-1.8-3.8-3.8 1.7-3.7 3.8-3.7z' })
                )
            );
        }
    }]);

    return IoIosRecording;
}(React.Component);

exports.default = IoIosRecording;
module.exports = exports['default'];