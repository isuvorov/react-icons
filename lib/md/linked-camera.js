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

var MdLinkedCamera = function (_React$Component) {
    _inherits(MdLinkedCamera, _React$Component);

    function MdLinkedCamera() {
        _classCallCheck(this, MdLinkedCamera);

        return _possibleConstructorReturn(this, (MdLinkedCamera.__proto__ || Object.getPrototypeOf(MdLinkedCamera)).apply(this, arguments));
    }

    _createClass(MdLinkedCamera, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm26.6 10c1.9 0 3.4 1.5 3.4 3.4h2.2c0-3.1-2.5-5.6-5.6-5.6v2.2z m-6.6 21.6c4.6 0 8.4-3.6 8.4-8.2s-3.8-8.4-8.4-8.4-8.4 3.8-8.4 8.4 3.8 8.2 8.4 8.2z m8.4-16.6h8.2v18.4c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-20c0-1.8 1.4-3.4 3.2-3.4h5.4l3-3.4h10v5c1.9 0 3.4 1.5 3.4 3.4z m-1.8-9.5v-2.1c5.6 0 10 4.4 10 10h-2.1c0-4.3-3.6-7.9-7.9-7.9z m-11.9 17.9c0-3 2.3-5.4 5.3-5.4s5.3 2.4 5.3 5.4-2.3 5.3-5.3 5.3-5.3-2.4-5.3-5.3z' })
                )
            );
        }
    }]);

    return MdLinkedCamera;
}(React.Component);

exports.default = MdLinkedCamera;
module.exports = exports['default'];