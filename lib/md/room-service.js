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

var MdRoomService = function (_React$Component) {
    _inherits(MdRoomService, _React$Component);

    function MdRoomService() {
        _classCallCheck(this, MdRoomService);

        return _possibleConstructorReturn(this, (MdRoomService.__proto__ || Object.getPrototypeOf(MdRoomService)).apply(this, arguments));
    }

    _createClass(MdRoomService, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23 13c6.5 1.3 11.5 6.8 12 13.6h-30c0.5-6.8 5.5-12.3 12-13.6-0.2-0.4-0.4-0.9-0.4-1.4 0-1.8 1.6-3.2 3.4-3.2s3.4 1.4 3.4 3.2c0 0.5-0.2 1-0.4 1.4z m-19.6 15.4h33.2v3.2h-33.2v-3.2z' })
                )
            );
        }
    }]);

    return MdRoomService;
}(React.Component);

exports.default = MdRoomService;
module.exports = exports['default'];