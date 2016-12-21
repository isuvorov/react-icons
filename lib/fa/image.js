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

var FaImage = function (_React$Component) {
    _inherits(FaImage, _React$Component);

    function FaImage() {
        _classCallCheck(this, FaImage);

        return _possibleConstructorReturn(this, (FaImage.__proto__ || Object.getPrototypeOf(FaImage)).apply(this, arguments));
    }

    _createClass(FaImage, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm13.3 13.4q0 1.6-1.2 2.8t-2.8 1.1-2.8-1.1-1.2-2.8 1.2-2.9 2.8-1.1 2.8 1.1 1.2 2.9z m21.3 7.9v9.3h-29.3v-4l6.7-6.6 3.3 3.3 10.6-10.6z m1.9-14.6h-33.2q-0.2 0-0.4 0.2t-0.2 0.5v25.2q0 0.3 0.2 0.5t0.4 0.2h33.2q0.3 0 0.5-0.2t0.2-0.5v-25.2q0-0.3-0.2-0.5t-0.5-0.2z m3.4 0.7v25.2q0 1.4-1 2.4t-2.4 0.9h-33.2q-1.3 0-2.3-0.9t-1-2.4v-25.2q0-1.4 1-2.4t2.3-0.9h33.2q1.4 0 2.4 0.9t1 2.4z' })
                )
            );
        }
    }]);

    return FaImage;
}(React.Component);

exports.default = FaImage;
module.exports = exports['default'];