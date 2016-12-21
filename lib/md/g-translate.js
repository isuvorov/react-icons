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

var MdGTranslate = function (_React$Component) {
    _inherits(MdGTranslate, _React$Component);

    function MdGTranslate() {
        _classCallCheck(this, MdGTranslate);

        return _possibleConstructorReturn(this, (MdGTranslate.__proto__ || Object.getPrototypeOf(MdGTranslate)).apply(this, arguments));
    }

    _createClass(MdGTranslate, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 33.4v-21.8c0-0.9-0.7-1.6-1.6-1.6h-14.7l1.9 6.7h3.2v-1.7h1.8v1.7h6v1.7h-2.1c-0.5 2.1-1.7 4.2-3.2 5.9l4.6 4.4-1.2 1.3-4.5-4.5-1.5 1.5 1.3 4.6-3.4 3.4h11.8c0.9 0 1.6-0.7 1.6-1.6z m-11.7-13.2c0.4 0.8 1 1.8 1.9 2.9 2-2.5 2.5-4.7 2.5-4.7h-6.6l0.5 1.8h1.7z m-1.3 1.3l1 3.7 1-0.9c-0.8-0.9-1.4-1.8-2-2.8z m-3.5-3.8c0-0.4 0-0.9-0.1-1.2h-6.6v2.6h3.7c-0.3 1-1.3 2.5-3.6 2.5-2.1 0-3.9-1.9-3.9-4.1s1.8-4.1 3.9-4.1c1.3 0 2.1 0.6 2.5 1.1l0.2 0 2-1.9-0.1-0.1c-1.3-1.2-2.8-1.8-4.6-1.8-3.7 0-6.7 3.1-6.7 6.8s3 6.8 6.8 6.8c3.8 0 6.5-2.7 6.5-6.6z m14.9-9.3c1.8 0 3.2 1.4 3.2 3.2v21.8c0 1.8-1.4 3.2-3.2 3.2h-13.4l-1.6-5h-11.8c-1.8 0-3.2-1.4-3.2-3.2v-21.8c0-1.8 1.4-3.2 3.2-3.2h10l1.5 5h15.3z' })
                )
            );
        }
    }]);

    return MdGTranslate;
}(React.Component);

exports.default = MdGTranslate;
module.exports = exports['default'];